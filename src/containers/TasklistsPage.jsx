import React from 'react';

import TaskListsStore from '../stores/TaskListStore';
import TaskListsActions from '../actions/TaskListActions';

import TaskListCreateModal from '../components/TaskListPage/TaskListCreateModal.jsx';
import TasklistsPage from '../components/TaskListPage/TasklistPage.jsx';

function getStateFromFlux() {
    return {
        taskLists: TaskListsStore.getTaskLists()
    };
}

const TasklistsPageContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            ...getStateFromFlux(),
            isCreatingTaskList: false
        };
    },

    componentWillMount() {
        TaskListsActions.loadTaskLists();
    },

    componentDidMount() {
        TaskListsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        TaskListsStore.removeChangeListener(this._onChange);
    },

    handleAddTaskList() {
        this.setState({ isCreatingTaskList : true });
    },

    handleTaskListCreateModalClose() {
        this.setState({ isCreatingTaskList : false });
    },

    handleTaskListSubmit(taskList) {
        TaskListsActions.createTaskList(taskList);

        this.setState({ isCreatingTaskList : false });
    },

    render() {
        return (
            <div>
                <TasklistsPage
                    taskLists={this.state.taskLists}
                    selectedListId={this.props.params.id}
                    page={this.props.children}
                    onAddTaskList={this.handleAddTaskList}
                    onLogOut={this.onLogOut}
                />

                <TaskListCreateModal
                    isOpen={this.state.isCreatingTaskList}
                    onSubmit={this.handleTaskListSubmit}
                    onClose={this.handleTaskListCreateModalClose}
                />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default TasklistsPageContainer;
