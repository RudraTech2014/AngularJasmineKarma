export class CustomerReservation{
    hotelRoomCapacity = 30;
    customerCount = 10;

    //This will INCREASE the current customer count by 1
    registerCustomer(){
        return ++this.customerCount;
    }

    //This will DECREASE the current customer count by 1
    unRegisterCustomer(){
        return --this.customerCount;
    }


    
    availableRooms(){
        return this.hotelRoomCapacity-this.customerCount;
    }

    canReserveRoom(): boolean{
        let roomReserved = false;
        if(this.customerCount<this.hotelRoomCapacity){
            this.customerCount++;
            roomReserved = true;
        }

        return roomReserved;
    }

   
}