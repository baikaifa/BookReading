import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { Camera, CameraOptions } from '@ionic-native/camera';

// ViewChild
@Component({
  selector: 'page-bookstore',
  templateUrl: 'bookstore.html'
})
export class BookstorePage {
  public arr1 = [];
  // @ViewChild('ac') ac;
  icons: string = "camera";
  items = [];
  isActive = 0;
  isClick(i) {
    this.isActive = i;
  }
  arr = ['精选', '女生', '男生', '漫画'];
  constructor(private camera: Camera, private transfer: FileTransfer, private file: File, public http: Http, public httpService: HttpServicesProvider, public navCtrl: NavController) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.entr();
    // this.httpService.requestData('api',(data)=>{
    //   this.arr1 = JSON.parse(data['_body']);
    //   console.log(data);
    // })

  }
  
  //Login用到post
  entr() {
    this.http.get('/api').subscribe((data) => {
      this.arr1 = JSON.parse(data['_body']);
    });
    //   this.httpService.requestData('api',(data)=>{
    //     console.log(data);
    // this.arr1 = JSON.parse(data['_body']);
    //  })
  }
  Login() {
    var api = '/api';
    // alert(this.password);
    //下面这一行是封装的post请求，我们使用封装的post请求，有好处，不用频繁更换根url
    this.httpService.doPost(api, { username: '123' }, {})
    //下面的代码是没有封装的post请求,post是给后台发送信息，这里发送的是{username: '123'}，data里面是后台给前台的数据
    // this.http.post('/api', {username: '123'}, {}).subscribe((data)=>{
    //   console.log(data);
    //   alert('我post了数据');
    // })  
  }
  takePicture(sourceType) {
    //定义相机参数
    var options = {
      quality: 100,//图片的质量
      //图片类型
      //从图库中获取图片 this.camera.PictureSourceType.PHOTOLIBRARY
      //从拍照  this.camera.PictureSourceType.CAMERA
      sourceType: sourceType,
      saveToPhotoAlbum: true,//是否保存拍摄的照片到相册中去
      correctOrientation: true,//是否纠正拍摄照片方向
    }
    //获取图片方法
    this.camera.getPicture(options).then((imgPath) => {
      //alert(imgPath);;
      this.doUpload(imgPath);
    })
  }
  //上传图片
  doUpload(filePath) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',//input type=file
      fileName: 'xxx.jpg',//上传的图片名字
      mimeType: 'image/jpeg',//上传的图片类型
      params: {//给服务器post数据
        name: '小智',
        age: 28
      },
      headers: {}
    }
    var api = '上传图片的地址'
    fileTransfer.upload(filePath, api, options)
      .then((data) => {
        //success
        alert(JSON.stringify(data));
      }, (err) => {
        //erroe
        alert('erroe');
        alert(JSON.stringify(err));
      })
  }
}

