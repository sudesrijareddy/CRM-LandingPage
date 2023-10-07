import React from "react";
import styles from './UsersList.module.css';
import {BiDownArrowAlt,BiSolidUser} from 'react-icons/bi';
import {PiBagSimpleBold} from 'react-icons/pi';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import { Col, Row } from "react-bootstrap";

const UsersList = ({ usersData }) => {
    return (
        <Row className={styles.userlist}>
            <h1 className={styles.heading1}> <BiDownArrowAlt/>  Our Happy and Successful Customers</h1>
            {usersData.map((user) => (
                <Col className={styles.usercard}  md={3} sm={6} key={user.id}>
                    <BiSolidUser size={40} color="cadetblue"/>
                  <h2>{user.name}</h2>
                  <h5><PiBagSimpleBold/>  {user.occupation}</h5>
                  <p><strong>Age :</strong> {user.age}</p>
                  <p><MdOutlineEmail/> {user.email}</p>
                  <p><AiOutlinePhone/> {user.phone}</p>
                </Col>     
            ))}
        </Row>
    );
};

export default UsersList;