class OrderManager {
  orders
  constructor() {
    this.orders = []
  }

  placeOrder(order, id) {
    this.orders.push(id)
    return `You have successfully ordered: ${order} ${id}`
  }

  trackOrder(id) {
    return `You order ${id} will arrive in 10 minutes.`
  }

  cancelOrder(id) {
    this.orders = this.orders.filter((order) => order.id !== id)
    return `You have canceled order: ${id}`
  }
}

const manager = new OrderManager()
manager.placeOrder('Pad Thai', '1234')
manager.trackOrder('1234')
manager.cancelOrder('1234')
