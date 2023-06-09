import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdModeEdit } from 'react-icons/md'
import { updateUser } from '../../services/updateUser';
import Swal from 'sweetalert2';

const ModalUser = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { handleSubmit, register } = useForm()
    const showModal = () => {
        setIsModalOpen(true);
    };
    const editUser = (data) => {
        const updateFields = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => value !== '')
        )
        if (Object.keys(updateFields).length === 0) {
            return;
        }

        const updateUserData = Object.assign({}, user, updateFields)

        updateUser(user.id, updateUserData)
        Swal.fire({
            icon: 'success',
            text: 'Usario editado exitosamente'
        })
        setIsModalOpen(false);

    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button style={{ backgroundColor: '#1677ff' }} onClick={showModal}>
                <MdModeEdit />
            </button>
            <Modal title="Editar usuario" className='list__clients__details__modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <form onSubmit={handleSubmit(editUser)}>
                    <label>
                        Nombre
                        <input type="text" placeholder={user.name} {...register('name')} />

                    </label>
                    <label>
                        Email
                        <input type="text" placeholder={user.email} {...register('email')} />

                    </label>
                    <label>
                        Fecha de nacimiento
                        <input type="date" defaultValue={user.date} {...register('date')} />

                    </label>
                    <button type='submit' className='buttonModal'>Guardar</button>
                </form>

            </Modal>
        </>
    );
};
export default ModalUser;