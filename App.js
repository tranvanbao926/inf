import React, { Component } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import camera from "./images/camera.png"
import EditModall from "./components/EditModall"
import ImagePicker from 'react-native-image-picker';
export default class App extends Component {
  state = {
    avatarSource: null,
  };

  constructor(props) {
    super(props);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this._onPressShow = this._onPressShow.bind(this);
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('cancelled');
      } else if (response.error) {
        console.log(' Error:', response.error);
      } else if (response.customButton) {
        console.log('tapped', response.customButton);
      } else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        });
      }

    })
  }

  _onPressShow() {
    this.refs.EditModall.showEditModall();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={this.state.avatarSource} style={{ flex: 1 }}>
          <View
            resizeMode="cover"
            style={{
              flex: 1,
              marginHorizontal: 3,
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}>

            <TouchableOpacity style={{ margin: 5, padding: 5 }} onPress={this.selectPhotoTapped.bind(this)}>
              <Image source={camera} />
            </TouchableOpacity>

          </View>

        </ImageBackground>

        <View style={{ flex: 5 }}>
          <View
            style={{
              height: 10,
            }}
          />
          <View style={{ flex: 5 }}>
            <View style={styles.txtInf}>
              <Text>Tên đăng nhập: </Text>
              <TextInput>Trần Văn Bảo</TextInput>
            </View>
            <View style={styles.txt1} />

            <View style={styles.txtInf}>
              <Text>Họ và tên: </Text>
              <TextInput>Trần Văn Bảo</TextInput>
            </View>
            <View style={styles.txt1} />

            <View style={styles.txtInf}>
              <Text>Ngày sinh: </Text>
              <TextInput>26/02/1998</TextInput>
            </View>
            <View style={styles.txt1} />

            <View style={styles.txtInf}>
              <Text>Mail: </Text>
              <TextInput>baotran@gmail.com</TextInput>
            </View>
            <View style={styles.txt1} />

            <View style={styles.txtInf}>
              <Text>Chức vụ: </Text>
              <TextInput>nhân viên</TextInput>
            </View>
            <View style={styles.txt1} />

            <TouchableOpacity style={styles.txtInf} onPress={this._onPressShow}>
              <Text>Đơn vị: Công ty cổ phần...</Text>
            </TouchableOpacity>
            <View style={styles.txt1} />
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.btnSignInStyle} >
              <Text style={styles.txt2}>Nhập lại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignInStyle} onPress={this._onPressShow}>
              <Text style={styles.txt2}>Xong</Text>
            </TouchableOpacity>
          </View>
          <EditModall ref={"EditModall"} parentFlatList={this}></EditModall>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btnSignInStyle: {
    height: 50,
    backgroundColor: "#004462",
    borderRadius: 5,
    width: 150,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: 'column'
  },
  txtInf: {
    color: "#015C7B",
    fontFamily: "Avenir",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row'
  },
  txt1: {
    height: 0.3,
    borderWidth: 0.3,
    margin: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#a9a9a9"
  },

  txt2: {
    color: "#fff",
    fontFamily: "Avenir",
    fontSize: 20
  }
});