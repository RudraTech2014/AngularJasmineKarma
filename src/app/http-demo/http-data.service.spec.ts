import { TestBed } from '@angular/core/testing';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpDataService } from './http-data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostModel } from '../model/post.model';

describe('HttpDataService', () => {
  let httpTestCtrl: HttpTestingController;
  let dataService: HttpDataService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
      providers: [HttpDataService]
  }));

  beforeEach(()=>{
   
    dataService = TestBed.get(HttpDataService);
    httpTestCtrl = TestBed.get(HttpTestingController);

  });


  afterEach(()=>{
    httpTestCtrl.verify();
  });


  it('should test HttpClient.get',()=>{
    const testPost: PostModel[] = [
                  {id: 1, userId: 1,title:'Test Title 1', body: 'Sample body 1'},
                  {id: 2, userId: 2,title:'Test Title 2', body: 'Sample body 2'}];

      dataService.getPostList().subscribe((posts)=>{
          expect(testPost).toBe(posts,'should check mocked data');  
      });   
      
      const req = httpTestCtrl.expectOne(dataService.BASE_URL+'posts');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testPost);
      httpTestCtrl.verify();
   
  });

  it('should add post and retun added post', ()=>{
    const newPost: PostModel = {id:101, userId: 1, title: 'New Post', body: 'Sample post body'};

    dataService.addPost(newPost).subscribe((addedPost)=>{
      expect(addedPost).toBe(newPost);
    });
      const req = httpTestCtrl.expectOne(dataService.BASE_URL+'posts');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(newPost);

          
  });

  it('should test 404 error',()=>{
    const errorMsg = 'mock 404 error occured';
    dataService.getPostList().subscribe(
      (data)=>{
          fail('failing with error 404');
    },
     (error: HttpErrorResponse) =>{
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMsg);
      }
    );
    const req = httpTestCtrl.expectOne(dataService.BASE_URL+'posts');
    req.flush(errorMsg, { status: 404, statusText: 'Not Found' });

  });
  


});
