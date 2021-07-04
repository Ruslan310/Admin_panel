import React, {useEffect, useState} from 'react'
import Amplify from 'aws-amplify'

import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui/dist/style.css';
import {DataStore} from 'aws-amplify';

import {Customer, Order, User} from "./models";
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
      const customer = {email: email }
      setEmail("")
      const createdCustomer = await DataStore.save(
        new Customer(customer)
      );
      console.log('created: ', createdCustomer)
      setCustomers([...customers, createdCustomer])
      // await API.graphql(graphqlOperation(createCustomer, {input: customer}))
    } catch (err) {
      console.log('error creating customer:', err)
    }
  }

  useEffect(() => {
    fetchOrders()
    fetchUsers()
    fetchCustomers()
  }, [])

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
    console.log(customers)
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
              <p style={styles.todoDescription}>{order?.orderStatus}</p>
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
