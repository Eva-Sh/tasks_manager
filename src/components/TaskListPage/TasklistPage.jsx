import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ListIcon from 'material-ui/lib/svg-icons/action/view-list';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import ExitIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import FolderIcon from 'material-ui/lib/svg-icons/file/folder';
import AddIcon from 'material-ui/lib/svg-icons/content/add';
import Colors from 'material-ui/lib/styles/colors';

import './TasklistsPage.less';

const TasklistsPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    render() {
        const { router } = this.context;

        return (
            <div className='task-lists-page'>
                <div className='task-lists-page__menu'>
                    <List className='task-lists-page__list'>
                        <h3 className='task-lists-page__title'>
                           Менеджер задач
                        </h3>
                        <Divider />
                        <List className='task-lists-page__list'>
                            <ListItem
                                leftIcon={<HomeIcon />}
                                primaryText="Список задач"
                                onClick={router.push.bind(null, `/lists`)}
                            />
                            <ListItem
                                leftIcon={<ListIcon />}
                                primaryText="Страница о менеджере"
                                onClick={router.push.bind(null, `/about`)}
                            />
                        </List>
                        <Divider />
                        <List className='task-lists-page__list' subheader="Разделы">
                            {
                                this.props.taskLists.map(list =>
                                    <ListItem
                                        key={list.id}
                                        leftIcon={<FolderIcon />}
                                        style={
                                            this.props.selectedListId === list.id
                                                ?
                                                { backgroundColor: 'rgba(0,0,0,0.1)' }
                                                :
                                                null
                                        }
                                        primaryText={list.name}
                                        onClick={router.push.bind(null, `/lists/${list.id}`)}
                                    />
                                )
                            }
                            <ListItem
                                leftIcon={<AddIcon />}
                                primaryText="Новый раздел задач"
                                onClick={this.props.onAddTaskList}
                            />
                        </List>
                        <Divider />
                        <List className='task-lists-page__list'>
                            <ListItem
                                leftIcon={<ExitIcon />}
                                primaryText="Выйти"
                                onClick={this.props.onLogOut}
                            />
                        </List>
                    </List>
                </div>
                <div className='task-lists-page__tasks'>
                    {this.props.page}
                </div>
            </div>
        );
    }
});

export default TasklistsPage;
