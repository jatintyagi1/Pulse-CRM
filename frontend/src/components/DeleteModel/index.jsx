import { Modal } from 'antd';

export default function DeleteModel({ config }) {
    const [displayItem, setDisplayItem] = useState('');


    let {
        entity,
        deleteModalLabels,
        deleteMessage = 'are_you_sure_you_want_to_delete',
        modalTitle = 'delete_confirmation',
    } = config;

    return (
        <Modal>
            <p>
                {deleteMessage}
                {displayItem}
            </p>
        </Modal>
    )
}