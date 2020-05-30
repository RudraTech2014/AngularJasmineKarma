import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EmployeeService]
  }).compileComponents());

  beforeEach(() => {
    service = TestBed.get(EmployeeService);


  });
  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should be return list of employee names ', (done) => {

    service.getListOfEmpNames().toPromise().then((data) => {
      expect(data.length).toBeGreaterThan(0);
      done();
    });


  });

});
