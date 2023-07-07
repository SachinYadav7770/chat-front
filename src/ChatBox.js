import React,{useEffect,useState} from "react";
import socket from './io';

function ChatBox() {
    const [inputField,setInputField] = useState({
        name : '',
        room : '',
        message : ''
    });
    const [isChatting,setIsChatting] = useState(false);
    const [messageList,setMessageList] = useState([]);
    useEffect(()=>{
        socket.on('receive_message',(data)=>{
            setMessageList([...messageList,data]);
        })
    })
    const inputHandler = (e) =>{
        setInputField({
            ...inputField,
            [e.target.name]:e.target.value
        })
    }
    const enterRoom = () =>{
        setIsChatting(true);
        socket.emit('join_room',inputField.room);
    }
    const sendMessage = async () =>{
        console.log(inputField);
        await socket.emit('send_message',inputField);
        setMessageList([...messageList,inputField])
        setInputField({...inputField,message:''})
    }

    return (
        <div>
            <h1>Chat App</h1>
            {
                !isChatting ? (
                    <div>
                        <input type="text" placeholder="Enter Name" name="name" onChange={inputHandler} />
                        <input type="text" placeholder="Enter Room" name="room" onChange={inputHandler} />
                        <button onClick={enterRoom}>
                            Enter Chat Room
                        </button>
                    </div>
                ) : (
                    <div>
                        {
                            messageList.map((item,index)=>{
                                return (
                                    <div key={index}>
                                        {item.name} : {item.message}
                                    </div>
                                )
                            })
                        }
                        <input type="text" placeholder="Enter Your Message ..." name="message" onChange={inputHandler} value={ inputField.message } />
                        <button onClick={sendMessage}>
                            Enter Chat Room
                        </button>
                    </div>
                )
            }
            
        </div>
    )
}

export default ChatBox;