import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import TextButton from './TextButton';
import {
	COLOR_PRIMARY_WHITE,
	COLOR_NEW_FONT_BLACK,
	COLOR_NEW_FONT_GRAY,
	COLOR_PRIMARY_PURPLE,
	COLOR_TRANSPARENT_BACKGROUND_GRAY
} from '../assets/colors/colors';

const ModalComponent = (props) => {

	return (
		<View>
			<Modal
				visible={props.display}
				animationType='fade'
				transparent={true}
				onRequestClose={() => console.log('closed')}
			>
				<View style={styles.modal}>
					<View style={styles.modalContainer}>
						<View style={styles.headerHolder}>
							<Text style={styles.modalHeader}>{props.header}</Text>
						</View>
						<View style={styles.textHolder}>
							<Text style={styles.modalText}>{props.text}</Text>
						</View>
						<View style={styles.singleButtonContainer}>
							<TextButton
								title='OK'
								buttonStyle={styles.singleButton}
								titleStyle={styles.buttonTitle}
								onPress={() => props.function()}
							/>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: COLOR_TRANSPARENT_BACKGROUND_GRAY,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalContainer: {
		height: 250,
		width: '90%',
		backgroundColor: COLOR_PRIMARY_WHITE,
		borderRadius: 7,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerHolder: {
		marginTop: '5%',
		marginHorizontal: '5%',
		alignSelf: 'center',
		flex: 1
	},
	modalHeader: {
		fontSize: 22,
		fontWeight: 'bold',
		color: COLOR_NEW_FONT_BLACK
	},
	textHolder: {
		marginHorizontal: '5%',
		alignSelf: 'center',
		flex: 2,
		justifyContent: 'center'
	},
	modalText: {
		fontSize: 18,
		color: COLOR_NEW_FONT_GRAY,
		fontWeight: '300'
	},
	singleButtonContainer: {
		marginHorizontal: '5%',
		marginBottom: '10%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	singleButton: {
		backgroundColor: COLOR_PRIMARY_PURPLE,
		borderRadius: 4,
		height: 50,
		width: '47%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonTitle: {
		fontSize: 18,
		color: COLOR_PRIMARY_WHITE,
		fontWeight: 'bold'
	}

});

export default ModalComponent;