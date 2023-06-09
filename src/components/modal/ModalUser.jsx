import { Button, Modal } from 'antd';
import { useState } from 'react';
import { MdModeEdit } from 'react-icons/md'

const ModalUser = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                <MdModeEdit />
            </Button>
            <Modal title="Editar usuario" className='list__clients__details__modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form>
                    <label>
                        Id
                        <input type="text" placeholder={user.id} />

                    </label>
                    <label>
                    Nombre
                    <input type="text" placeholder={user.name} />

                </label>
                <label>
                    Email
                    <input type="text" placeholder={user.email} />

                </label>
                <label>
                    Fecha de nacimiento
                    <input type="text" placeholder={user.date} />

                </label>
                </form>

            </Modal>
        </>
    );
};
export default ModalUser;