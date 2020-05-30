import { Component, OnInit } from '@angular/core';
import { HttpDataService } from './http-data.service';
import { UserModel } from './user.model';
import { PhotoModel } from '../model/photo.model';
import { PostModel } from '../model/post.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  postForm: FormGroup;
  postList: PostModel[];

  constructor(private httpDataService: HttpDataService) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      postTitle: new FormControl('',[]),
      postBody: new FormControl('',[])
    });

    this.httpDataService.getPostList().subscribe((data)=>{
      console.log(data);
      if(null!==data){
        this.postList = data  ;
        console.log(this.postList);
      }
    });

  }

  public submitPost(){
    let post: PostModel;
    post.userId = 1;
    post.title = this.postForm.controls['postTitle'].value;
    post.body = this.postForm.controls.postBody.value;

    this.httpDataService.addPost(post).subscribe((outputPost)=>{
      console.log(outputPost);
    });
  }

}
