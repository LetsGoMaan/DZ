import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar1 from './avatar1.jpg'
import avatar2 from './avatar2.jpg'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

type UserType = {
    avatar: string
    name: string
}

type DialogType = {
    text: string
    time: string
}
// нужно создать правильный тип вместо any
export type MessageType = {
    id: number

    user: UserType

    message: DialogType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar1, // можно менять
        name: 'John Snow',  // можно менять
    },
    message: {
        text: 'Hey, are we going for a walk??', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar2, // можно менять
        name: 'Daenerys Targaryen', // можно менять
    },
    message: {
        text: 'But you don\'t know anything about props Jon Snow\'s .', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} className={s2.homeWorkWrapper}>
            <div className={s2.hwTitle}>Hometask #1</div>
            <div className={s2.hwLine}></div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
            <div className={s2.hwLine2}></div>
        </div>
    )
}

export default HW1
