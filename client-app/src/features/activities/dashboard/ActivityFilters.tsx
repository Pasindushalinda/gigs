import React from "react";
import { Header, Menu } from "semantic-ui-react";
import Calendar from 'react-calendar';

export default function ActivityFilter() {
    return (
        <>
            <Menu vertical size='large' style={{ width: '100%', marginTop: '28px' }}>
                <Header icon='filter' attached color='teal' content='Filter' />
                <Menu.Item content='All Activities' />
                <Menu.Item content="I'm going" />
                <Menu.Item content="I'm hosting" />
            </Menu>
            <Calendar />
        </>
    )
}