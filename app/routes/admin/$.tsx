import {
  Admin,
  Datagrid,
  List,
  ReferenceField,
  Resource,
  TextField,
  Show,
  SimpleShowLayout,
  ShowButton,
  AutocompleteInput,
  Create,
  Edit,
  EditButton,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";

const dataProvider = postgrestRestProvider("http://localhost:3000/admin/api");

const AdminPage = () => (
  <Admin basename="/admin" dataProvider={dataProvider}>
    <Resource
      name="products"
      list={<ProductList />}
      show={<ProductShow />}
      edit={<ProductEdit />}
      create={<ProductCreate />}
    />
    <Resource
      name="categories"
      list={<CategoryList />}
      create={<CategoryCreate />}
      edit={<CategoryEdit />}
    />
  </Admin>
);

const ProductList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <ReferenceField reference="categories" source="categoryId">
        <TextField source="name" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ReferenceField reference="categories" source="categoryId">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput reference="categories" source="categoryId">
        <AutocompleteInput
          source="name"
          filterToQuery={(query) => ({ "name@ilike": query })}
        />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput reference="categories" source="categoryId">
        <AutocompleteInput
          source="name"
          filterToQuery={(query) => ({ "name@ilike": query })}
        />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

const CategoryList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default AdminPage;
