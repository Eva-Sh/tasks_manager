import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ListIcon from 'material-ui/lib/svg-icons/action/view-list';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import ExitIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import FolderIcon from 'material-ui/lib/svg-icons/file/folder';
import AddIcon from 'material-ui/lib/svg-icons/content/add';

import './TasklistsPage.less';

const TaskListsPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    render() {
        const { router } = this.context;

        return (
            <div className='task-lists-page'>
                <div className='task-lists-page__menu'>
                    <List className='task-lists-page__list'>
                        <h3 className='task-lists-page__title'>Task manager</h3>
                        <Divider />
                        <List className='task-lists-page__list'>
                            <ListItem
                                leftIcon={<HomeIcon />}
                                primaryText="Home"
                                onClick={router.push.bind(null, `/lists`)}
                            />
                            <ListItem
                                leftIcon={<ListIcon />}
                                primaryText="About"
                                onClick={router.push.bind(null, `/about`)}
                            />
                        </List>
                        <Divider />
                        <List className='task-lists-page__list' subheader="Task Lists">
                        </List>
                        <Divider />
                        <List className='task-lists-page__list'>
                            <ListItem
                                leftIcon={<ExitIcon />}
                                primaryText="Log out"
                                onClick={this.handleLogOut}
                            />
                        </List>
                    </List>
                </div>
                <div className='task-lists-page__tasks'>
                    {this.props.children}
                </div>
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default TaskListsPage;
