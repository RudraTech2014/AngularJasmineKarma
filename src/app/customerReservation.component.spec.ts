 import { CustomerReservation } from "./customerReservation.component";

describe('Customer Reservation',()=>{
    let custService: CustomerReservation;

    beforeEach(()=>{
        custService = new CustomerReservation();
    });

    afterEach(()=>{
        custService = null;
    });
    beforeAll(()=>{

    });

    afterAll(()=>{

    });
    it('should register customer / increase current customer count by 1',()=>{
          

          let custCount = custService.registerCustomer();

          expect(custCount).toEqual(11);

    });

   it('should un-register customer / decrease current customer count by 1',()=>{
    

    let custCount = custService.unRegisterCustomer();

    expect(custCount).toEqual(9);
    });
    

}); 

describe('Room Reservation', ()=>{

    it('[Arrange - Asset - Act] - Testing room is reserved or not', ()=>{
            //Arrange
                let custReserve = new CustomerReservation();
            //Act
                let isReserved = custReserve.canReserveRoom();   
            //Assert    
            expect(isReserved).toBeTruthy();
    });
})