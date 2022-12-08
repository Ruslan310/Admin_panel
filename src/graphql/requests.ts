import {API, graphqlOperation} from 'aws-amplify';
import * as queries from './queries';
import * as mutations from './mutations';

import {IData} from './IData';
import {
  Address,
  Box,
  Category,
  Component,
  ComponentProduct,
  Coordinate,
  CreateAddressInput,
  CreateAddressMutation,
  CreateCategoryInput,
  CreateCategoryMutation,
  CreateComponentInput,
  CreateComponentMutation,
  CreateComponentProductInput, CreateComponentProductMutation,
  CreateCoordinateInput,
  CreateCoordinateMutation,
  CreateDepartmentInput,
  CreateDepartmentMutation,
  CreateProductInput,
  CreateProductMutation,
  CreateSupplierInput,
  CreateSupplierMutation,
  CreateWarehouseInput,
  CreateWarehouseMutation, Customer,
  Department,
  GetComponentQuery,
  GetCoordinateQuery,
  GetSupplierQuery,
  GetUserQuery,
  GetWarehouseQuery,
  GetWPOrderQuery,
  ListAddressesQuery, ListBoxesQuery,
  ListCategoriesQuery,
  ListComponentsQuery,
  ListCoordinatesQuery, ListCustomersQuery,
  ListDepartmentsQuery,
  ListProductsQuery,
  ListSuppliersQuery,
  ListTypesQuery, ListUsersQuery,
  ListWarehousesQuery, ModelBoxFilterInput,
  WPOrdersByWPOrderStatusQuery,
  Product,
  Supplier,
  Type,
  UpdateAddressInput,
  UpdateAddressMutation,
  UpdateBoxInput,
  UpdateBoxMutation,
  UpdateComponentInput,
  UpdateComponentMutation,
  UpdateCoordinateInput,
  UpdateCoordinateMutation,
  UpdateWPOrderInput,
  UpdateWPOrderMutation,
  User,
  UsersBySubQuery,
  Warehouse,
  WPOrder,
  WPORDER_STATUS,
} from '../API';

export const fetchUserBySub = async (
  sub: string,
): Promise<any> => {
  const fetchedUserData = (await API.graphql(
    graphqlOperation(queries.usersBySub, {sub}),
  )) as IData<UsersBySubQuery>;
  return fetchedUserData.data.usersBySub?.items[0] || null;
};

export const updateBox = async (boxToUpdate: UpdateBoxInput): Promise<Box> => {
  const updatedBoxData = (await API.graphql(
    graphqlOperation(mutations.updateBox, {input: boxToUpdate}),
  )) as IData<UpdateBoxMutation>;
  return updatedBoxData.data.updateBox as Box;
};

export const updateComponent = async (componentToUpdate: UpdateComponentInput): Promise<Component> => {
  const data = (await API.graphql(
    graphqlOperation(mutations.updateComponent, {input: componentToUpdate}),
  )) as IData<UpdateComponentMutation>;
  return data.data.updateComponent as Component;
};

export const updateAddress = async (addressToUpdate: UpdateAddressInput): Promise<Address> => {
  const updatedBoxData = (await API.graphql(
    graphqlOperation(mutations.updateAddress, {input: addressToUpdate}),
  )) as IData<UpdateAddressMutation>;
  return updatedBoxData.data.updateAddress as Address;
};

export const updateCoordinate = async (coordinateToUpdate: UpdateCoordinateInput): Promise<Coordinate> => {
  const updatedCoordinateData = (await API.graphql(
    graphqlOperation(mutations.updateCoordinate, {input: coordinateToUpdate}),
  )) as IData<UpdateCoordinateMutation>;
  return updatedCoordinateData.data.updateCoordinate as Coordinate;
};

export const updateWPOrder = async (wpOrderToUpdate: UpdateWPOrderInput): Promise<WPOrder> => {
  const updatedBoxData = (await API.graphql(
    graphqlOperation(mutations.updateWPOrder, {input: wpOrderToUpdate}),
  )) as IData<UpdateWPOrderMutation>;
  return updatedBoxData.data.updateWPOrder as WPOrder;
};

export const fetchCoordinate = async (id: string): Promise<Coordinate> => {
  const coordinateData = (await API.graphql(
    graphqlOperation(queries.getCoordinate, {id: id}),
  )) as IData<GetCoordinateQuery>;
  return coordinateData.data.getCoordinate as Coordinate;
};

export const fetchUser = async (id: string): Promise<User> => {
  const userData = (await API.graphql(
    graphqlOperation(queries.getUser, {id: id}),
  )) as IData<GetUserQuery>;
  return userData.data.getUser as User;
};

export const fetchWarehouse = async (id: string): Promise<Warehouse> => {
  const data = (await API.graphql(
    graphqlOperation(queries.getWarehouse, {id: id}),
  )) as IData<GetWarehouseQuery>;
  return data.data.getWarehouse as Warehouse;
};

export const fetchSupplier = async (id: string): Promise<Supplier> => {
  const data = (await API.graphql(
    graphqlOperation(queries.getSupplier, {id: id}),
  )) as IData<GetSupplierQuery>;
  return data.data.getSupplier as Supplier;
};

export const fetchComponent = async (id: string): Promise<Component> => {
  const data = (await API.graphql(
    graphqlOperation(queries.getComponent, {id: id}),
  )) as IData<GetComponentQuery>;
  return data.data.getComponent as Component;
};

export const fetchOrder = async (id: string): Promise<WPOrder> => {
  const orderData = (await API.graphql(
    graphqlOperation(queries.getWPOrder, {id: id}),
  )) as IData<GetWPOrderQuery>;
  return orderData.data.getWPOrder as WPOrder;
};

export const fetchOrdersByStatus = async (status: WPORDER_STATUS): Promise<WPOrder[]> => {
  const fetchedOrdersData = (await API.graphql(
    graphqlOperation(queries.wPOrdersByWPOrderStatus, {
      WPOrderStatus: status,
    }),
  )) as IData<WPOrdersByWPOrderStatusQuery>;
  return fetchedOrdersData.data.wPOrdersByWPOrderStatus?.items as WPOrder[];
};

export const fetchOrdersByStatusNew = async (status: WPORDER_STATUS, nextPage?: string | null): Promise<WPOrdersByWPOrderStatusQuery> => {
  const fetchedOrdersData = (await API.graphql(
    graphqlOperation(queries.wPOrdersByWPOrderStatus, {
      WPOrderStatus: status,
    }),
  )) as IData<WPOrdersByWPOrderStatusQuery>;
  return fetchedOrdersData.data as WPOrdersByWPOrderStatusQuery;
};

export const fetchBoxes = async (filter?: ModelBoxFilterInput): Promise<Box[]> => {
  const data = (await API.graphql(
    graphqlOperation(queries.listBoxes, {filter: filter}),
  )) as IData<ListBoxesQuery>;
  console.log(data.data.listBoxes)
  return data.data.listBoxes?.items as Box[];
};

export const fetchAddresses = async (): Promise<Address[]> => {
  const fetchedAddressesData = (await API.graphql(
    graphqlOperation(queries.listAddresses),
  )) as IData<ListAddressesQuery>;
  return fetchedAddressesData.data.listAddresses?.items as Address[];
};

export const fetchProducts = async (): Promise<Product[]> => {
  const fetchedProductsData = (await API.graphql(
    graphqlOperation(queries.listProducts),
  )) as IData<ListProductsQuery>;
  return fetchedProductsData.data.listProducts?.items as Product[];
};

export const fetchUsers = async (): Promise<User[]> => {
  const data = (await API.graphql(
    graphqlOperation(queries.listUsers),
  )) as IData<ListUsersQuery>;
  return data.data.listUsers?.items as User[];
};

export const fetchCustomers = async (): Promise<Customer[]> => {
  const data = (await API.graphql(
    graphqlOperation(queries.listCustomers),
  )) as IData<ListCustomersQuery>;
  return data.data.listCustomers?.items as Customer[];
};

export const fetchCategories = async (): Promise<Category[]> => {
  const data = (await API.graphql(
    graphqlOperation(queries.listCategories),
  )) as IData<ListCategoriesQuery>;
  return data.data.listCategories?.items as Category[];
};

export const fetchTypes = async (): Promise<Type[]> => {
  const data = (await API.graphql(
    graphqlOperation(queries.listTypes),
  )) as IData<ListTypesQuery>;
  return data.data.listTypes?.items as Type[];
};

export const fetchDepartments = async (): Promise<Department[]> => {
  const data = (await API.graphql(
    graphqlOperation(queries.listDepartments),
  )) as IData<ListDepartmentsQuery>;
  return data.data.listDepartments?.items as Department[];
};

export const fetchSuppliers = async (): Promise<Supplier[]> => {
  const fetchedSuppliersData = (await API.graphql(
    graphqlOperation(queries.listSuppliers),
  )) as IData<ListSuppliersQuery>;
  return fetchedSuppliersData.data.listSuppliers?.items as Supplier[];
};

export const fetchWarehouses = async (): Promise<Warehouse[]> => {
  const fetchedWarehousesData = (await API.graphql(
    graphqlOperation(queries.listWarehouses),
  )) as IData<ListWarehousesQuery>;
  return fetchedWarehousesData.data.listWarehouses?.items as Warehouse[];
};

export const fetchCoordinates = async (): Promise<Coordinate[]> => {
  const fetchedCoordinatesData = (await API.graphql(
    graphqlOperation(queries.listCoordinates),
  )) as IData<ListCoordinatesQuery>;
  return fetchedCoordinatesData.data.listCoordinates?.items as Coordinate[];
};

export const fetchComponents = async (): Promise<Component[]> => {
  const data = (await API.graphql(
    graphqlOperation(queries.listComponents),
  )) as IData<ListComponentsQuery>;
  return data.data.listComponents?.items as Component[];
};

export const createAddress = async (newAddress: CreateAddressInput): Promise<Address> => {
  const createdAddress = (await API.graphql(
    graphqlOperation(mutations.createAddress, newAddress),
  )) as IData<CreateAddressMutation>;
  return createdAddress.data.createAddress as Address;
};

export const createCoordinate = async (newCoordinate: CreateCoordinateInput): Promise<Coordinate> => {
  const createdCoordinate = (await API.graphql(
    graphqlOperation(mutations.createCoordinate, newCoordinate),
  )) as IData<CreateCoordinateMutation>;
  return createdCoordinate.data.createCoordinate as Coordinate;
};

export const createSupplier = async (newSupplier: CreateSupplierInput): Promise<Supplier> => {
  const createdSupplier = (await API.graphql(
    graphqlOperation(mutations.createSupplier, newSupplier),
  )) as IData<CreateSupplierMutation>;
  return createdSupplier.data.createSupplier as Supplier;
};

export const createWarehouse = async (newWarehouse: CreateWarehouseInput): Promise<Warehouse> => {
  const createdWarehouse = (await API.graphql(
    graphqlOperation(mutations.createWarehouse, newWarehouse),
  )) as IData<CreateWarehouseMutation>;
  return createdWarehouse.data.createWarehouse as Warehouse;
};

export const createDepartment = async (newDepartment: CreateDepartmentInput): Promise<Department> => {
  const createdDepartment = (await API.graphql(
    graphqlOperation(mutations.createDepartment, newDepartment),
  )) as IData<CreateDepartmentMutation>;
  return createdDepartment.data.createDepartment as Department;
};

export const createCategory = async (newCategory: CreateCategoryInput): Promise<Category> => {
  const createdCategory = (await API.graphql(
    graphqlOperation(mutations.createCategory, newCategory),
  )) as IData<CreateCategoryMutation>;
  return createdCategory.data.createCategory as Category;
};

export const createProduct = async (newProduct: CreateProductInput): Promise<Product> => {
  const createdCategory = (await API.graphql(
    graphqlOperation(mutations.createProduct, newProduct),
  )) as IData<CreateProductMutation>;
  return createdCategory.data.createProduct as Product;
};

export const createComponent = async (newComponent: CreateComponentInput): Promise<Component> => {
  const createdComponent = (await API.graphql(
    graphqlOperation(mutations.createComponent, newComponent),
  )) as IData<CreateComponentMutation>;
  return createdComponent.data.createComponent as Component;
};

export const createComponentProduct = async (newComponentProduct: CreateComponentProductInput): Promise<ComponentProduct> => {
  const createdComponentProduct = (await API.graphql(
    graphqlOperation(mutations.createComponentProduct, newComponentProduct),
  )) as IData<CreateComponentProductMutation>;
  return createdComponentProduct.data.createComponentProduct as ComponentProduct;
};
