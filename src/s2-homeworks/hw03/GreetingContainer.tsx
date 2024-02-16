import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    name ? addUserCallback(name) : setError('Ошибка! Введите имя!')
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
    return name ? '' : setError('Ошибка! Введите имя!')// если имя пустое - показать ошибку
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users, addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any--?? was any
    const [newName, setNewName] = useState('')
    // let newName = ''
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix //'some name'
        error && setError('')
        // newName = name
    }

    //let lastUserName
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        // console.log(name)
        // lastUserName = name
        setNewName(name)
        setName('')
    }
    //console.log(lastUserName)


    const onBlur = () => {
        pureOnBlur(name, setError)
    }


    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }


    const totalUsers = users.length  // 0 // need to fix
    // useEffect(()=>{
    //     const lastUserName =  addUser()
    // },[name])
     const lastUserName =  newName//'some name' // need to fix
   // console.log(newName)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
