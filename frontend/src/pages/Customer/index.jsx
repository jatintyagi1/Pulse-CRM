import { fields } from './config';
import CrudModule from '../../module/CrudModule';
import DynamicForm from '../../forms/DynamicForm';

export default function Customer() {
    console.log('customer')

    const entity = 'client';
    const searchConfig = {
        displayLabels: ['name'],
        searchFields: 'name',
    };

    const deleteModalLabels = ['name'];

    const Labels = {
        PANEL_TITLE: 'client',
        DATATABLE_TITLE: 'client_list',
        ADD_NEW_ENTITY: 'add_new_client',
        ENTITY_NAME: 'client',
    };
    const configPage = {
        entity,
        ...Labels,
    };
    const config = {
        ...configPage,
        fields,
        searchConfig,
        deleteModalLabels,
    };


    return (
        <CrudModule
            createForm={<DynamicForm />}
            updateForm={<DynamicForm />}
            config={config}
        />
    )
};
