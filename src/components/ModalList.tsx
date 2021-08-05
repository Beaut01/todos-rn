import React from 'react'
import {FlatList, Modal, OpaqueColorValue, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {ModalListItem} from "./ModalListItem";
import {ModalInput} from "./ModalInput";

interface ModalListProps{
    visible: boolean,
    onDismiss: any,
    onAddList: any,
    lists: any[],
    onDeleteList: any
}

export const ModalList: React.FC<ModalListProps> = ({visible, onDismiss, onAddList, lists, onDeleteList}) => {
    return(
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    onDismiss()
                }}
            >
                <TouchableWithoutFeedback onPress={() => onDismiss()}>
                    <View style={styles.modalWrapper}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.modalBottom}>
                    <View style={styles.modalView}>
                        <View style={styles.modalListItems}>
                            <FlatList data={lists} keyExtractor={item => item.id.toString()} renderItem={({item}) => <ModalListItem list={item} onDeleteList={onDeleteList} />} />
                            <ModalInput onDismiss={onDismiss} onAddList={onAddList} />
                        </View>
                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    modalBlur: {
      flex: 1,
      backgroundColor: "#000"
    },
    modalView: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    modalBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    modalListItems: {
        paddingHorizontal: 20,
        width: '100%'
    },
    modalWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1
    }
})