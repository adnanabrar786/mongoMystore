const Customer = require("./models/customer");
const Order = require("./models/order");

let customerId = null;
Customer.insertMany([
    {
      name: "Joey Tribianni",
      email: "jt@gmail.com",
    },
    {
      name: "Chandler Bing",
      email: "cb@gmail.com",
    },
  ])

//   add customer
.then(customers => {
        console.log("Customer added :" , customers);
        return Customer.deleteOne({name : "Joey Tribianni"});
})
// delete customer
.then(deletedCustomer => {
    console.log("customer deleted : " , deletedCustomer );
    return Customer.find();
})
//   send remaining customer and relation first customer send order 
//  using foreign key
.then(remainingCustomers => {
    console.log("Remaining Customers:" , remainingCustomers);
    customerId = remainingCustomers[0]._id;
    return  Order.create({
        total : 45 ,
        customer_id : customerId
    });
})
//  find whoes cutomer order 
.then(order => {
    console.log("Existing Customer's Order :" , order );
    return Order.find({customer_id : customerId})
})
//  verify whoes cutomer order 
.then(selectedOrder => {
    console.log("Exiting Customer's Selected Order :" , selectedOrder);
})
.catch(e => {
    throw e;
})