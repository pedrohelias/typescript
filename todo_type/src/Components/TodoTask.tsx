import React from 'react'
import { Itask } from '../interfaces';

    interface Props {
        task?: Itask;
    }

    export const TodoTask = ({task}: Props) => {

    return <div>{task.taskName}</div>
    }

export default TodoTask;