import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

const TaskListCreateModal = React.createClass({
    getInitialState() {
        return {
            name : ''
        };
    },

    handleClose() {
        const { onClose } = this.props;

        this.setState({ name: '' });

        if (onClose) {
            onClose();
        }
    },

    handleSubmit() {
        const { onSubmit } = this.props;

        if (onSubmit) {
            onSubmit({
                name: this.state.name
            });
        }

        this.setState({ name: '' });
    },

    handleTextChange(e) {
        this.setState({
            name: e.target.value
        });
    },

    render() {
        const { name } = this.state;
        const { isOpen } = this.props;

        return (
            <Dialog
                className='task-list-create-modal'
                contentStyle={{ maxWidth: 400 }}
                actions={[
                    <FlatButton
                        label='Отмена'
                        onTouchTap={this.handleClose}
                    />,
                    <FlatButton
                        primary
                        label='Отправить'
                        disabled={!name}
                        onTouchTap={this.handleSubmit}
                    />
                ]}
                open={isOpen}
                onRequestClose={this.handleClose}
            >
                <h3 className='task-list-create-modal__modal-title'>Добавить список задач</h3>
                <TextField
                    fullWidth
                    ref={c => this.taskInput = c}
                    value={name}
                    onChange={this.handleTextChange}
                    hintText='к примеру, просмотр кино'
                    floatingLabelText='Введите название списка задач'
                />
            </Dialog>
        );
    }
});

export default TaskListCreateModal;
