import { Modal, TextInput } from "react-native-paper";
import { View } from "react-native";


interface Field {
    label: String;
    value: String;
    onChange: (text: string) => void;
}

interface ReusableModalProps

export default function UpdateInfoModal({ visible, onDismiss, fields }) {



    return (
        <>
            <Modal 
                dismissable={true}
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={{}}
                style={{}}
            >
                <View>
                    {fields.map((field, index) => (
                        <TextInput
                            label={field.label}
                            mode="flat"
                            value={field.value}
                            onChangeText={field.onChange}
                        ></TextInput>
                    ))}
                </View>

            </Modal>
        </>
    )
}