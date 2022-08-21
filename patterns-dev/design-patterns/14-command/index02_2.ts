class OrderManger {
  orders
  constructor() {
    this.orders = []
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args)
  }
}

class Command {
  execute
  constructor(execute) {
    this.execute = execute
  }
}

const PlaceOrderCommand = (order, id) => {
  return new Command(orders => {
    orders.push(id)
    console.log(`You have successfully ordered: ${order} (${id})`)
  })
}

const CancelOrderCommand = (id) => {
  return new Command(orders => {
    orders = orders.filter((order) => order.id !== id)
    return `You have cancel order: ${id}`
  })
}

const TrackOrderCommand = (id) => {
  return new Command(() => `Your order ${id} will arrive in 10 minutes.`)
}

const manager02 = new OrderManger()

manager02.execute(PlaceOrderCommand('Pad Thai', '1234'))
manager02.execute(TrackOrderCommand('1234'))
manager02.execute(CancelOrderCommand('1234'))
