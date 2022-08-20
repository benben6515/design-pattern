class CalorieTracker {
  constructor(maxCalorie) {
    this.maxCalorie = maxCalorie
    this.currentCalorie = 0
  }

  trackCalorie(calorieCount) {
    this.currentCalorie += calorieCount
    if (this.currentCalorie > this.maxCalorie) {
      this.logCalorieSurplus()
    }
  }

  logCalorieSurplus() {
    console.log('Max calorie exceeded!')
  }
}

const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalorie(500)
calorieTracker.trackCalorie(700)
calorieTracker.trackCalorie(1000)
