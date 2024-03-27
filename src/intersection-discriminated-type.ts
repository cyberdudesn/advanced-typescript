//////////////////////////////
// Intersection types & Descriminated[Tagged] types
//////////////////////////////
interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  type: 'stripe'; // Type descriminator
  card: string;
  cvc: string;
}

interface Paypal {
  type: 'paypal'; // Type descriminator
  email: string;
}

type OrderStripe = Order & Stripe;
type OrderPaypal = Order & Paypal;
// type OrderTest = Order & { test: string };

const order: Order = {
  id: 'sdf23',
  amount: 2000,
  currency: 'USD',
};

const orderStripe: OrderStripe = {
  ...order,
  type: 'stripe',
  card: '0000 1111 2222 3333',
  cvc: '123',
};

const orderPaypal: OrderPaypal = {
  ...order,
  type: 'paypal',
  email: 'abc@test.com',
};

type Payload = OrderStripe | OrderPaypal;

function checkOut(payload: Payload) {
  if (payload.type === 'stripe') {
    console.log('Checkout', payload.card, payload.cvc);
  }
  if (payload.type === 'paypal') {
    console.log('Checkout', payload.email);
  }
}

checkOut(orderStripe);
// Output: Checkout 0000 1111 2222 3333 123

checkOut(orderPaypal);
// Output: Checkout abc@test.com
