function groupBy(cb) {
    newArr = []
    this.map(elem => {
        if(cb(elem)) {
            newArr.push(elem)
        }
    })
    return newArr
}

Array.prototype.groupBy = groupBy
class Services {
    constructor() {
        this.usersData = []
        if (Services._instance) {
            return Services._instance
        }
      Services._instance = this;
    }
    fetchData(url) {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.usersData = data;
        })
    }
    async groupFunc() {
        this.sortedArr = []
        setTimeout(() => {
            this.sortedArr = this.usersData.groupBy(elem => elem.id > 20)
        }, 2000);
        
    }
    getSortedArr() {
        return this.sortedArr
    }

}
  
const check = new Services()

check.fetchData("https://jsonplaceholder.typicode.com/posts")
check.groupFunc()
console.log(getSortedArr())
