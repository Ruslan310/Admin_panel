import React, {useEffect, useState} from 'react'
import Amplify, {a, Auth, DataStore} from 'aws-amplify'

import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui/dist/style.css';

import {Customer, Order, Role, User} from "./models";
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const App = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [email, setEmail] = useState("")

  async function addCustomer() {
    try {
      if (!email) return
      const customer: Omit<Customer, "id"> = {email: email}
      setEmail("")
      const createdCustomer = await DataStore.save(
        new Customer(customer)
      );
      console.log('created: ', createdCustomer)
      setCustomers([...customers, createdCustomer])
    } catch (err) {
      console.log('error creating customer:', err)
    }
  }

  useEffect(() => {
    subscribeOnUsersUpdate();
    createSignedUserIfNotExist();
    fetchOrders();
    fetchUsers();
    fetchCustomers();
  }, [])

  const createSignedUserIfNotExist = async () => {
    const cognitoUser = await Auth.currentAuthenticatedUser();
    const newUser: Omit<User, "id"> = {email: cognitoUser.attributes.email, sub: cognitoUser.attributes.sub, role: Role.GUEST};
    console.log('user to be created: ', newUser)
    const existed = await DataStore.query(User, (user) => user.email('eq', newUser.email))
    if (existed.length === 0) {
      const createdUser = await DataStore.save(
        new User(newUser), (user) => user.email('ne', newUser.email)
      );
      console.log('just created: ', createdUser)
    }
  }

  const subscribeOnUsersUpdate = async () => {
    DataStore.observe(User).subscribe(event => {
      if (event.opType === 'INSERT') {
        console.log('created user: ', event.element);
      }
    });
  }

  const fetchOrders = async () => {
    const orders = await DataStore.query(Order);
    setOrders(orders)
  }

  const fetchUsers = async () => {
    const users = await DataStore.query(User);
    setUsers(users)
  }

  const fetchCustomers = async () => {
    const customers = await DataStore.query(Customer);
    setCustomers(customers)
  }

  return (
    // @ts-ignore
    <div style={styles.container}>
      <h2>Orders</h2>
      {
        orders.map((order) => {
          return (
            <div key={order?.id} style={styles.todo}>
              <p
                // @ts-ignore
                style={styles.todoName}>{order?.id}</p>
              <p style={styles.todoDescription}>{order?.boxes}</p>
            </div>
          );
        })
      }
      <h2>Users</h2>
      {
        users.map((user) => {
          return (
            <div key={user?.id} style={styles.todo}>
              <p
                // @ts-ignore
                style={styles.todoName}>{user?.email}</p>
              <p style={styles.todoDescription}>{user?.role}</p>
            </div>
          );
        })
      }
      <h2>Customers</h2>
      {
        customers.map((customer) => {
          return (
            <div key={customer?.id} style={styles.todo}>
              <p
                // @ts-ignore
                style={styles.todoName}>email: {customer?.email}</p>
              <p style={styles.todoDescription}>id: {customer?.id}</p>
            </div>
          );
        })
      }
      <input
        onChange={(event) => setEmail(event.target.value)}
        style={styles.input}
        value={email}
        placeholder="email"
      />
      <button style={styles.button} onClick={addCustomer}>Create customer</button>
      <AmplifySignOut/>
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  todo: {marginBottom: 15},
  input: {border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
  todoName: {fontSize: 20, fontWeight: 'bold'},
  todoDescription: {marginBottom: 0},
  button: {backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px'}
}

export default withAuthenticator(App, {
  usernameAlias: "email"
})
