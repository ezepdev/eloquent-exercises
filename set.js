
	function Set() {
        this.elements = new Array()
        
      }
    
        Set.from = function (iterable) {
          let new_instance = new Set()
        
        for (let element of iterable) {
          new_instance.add(element)
        }
        return new_instance
      }
    
        Set.prototype = {
        constructor: Set,
        add (element) { 
          if (!this.has(element)) { 
            this.elements.push(element)
          }
        },
        delete (element) {
          let indexOfElementSearched = this.elements.indexOf(element);
          if (indexOfElementSearched !== -1) this.elements.splice(indexOfElementSearched, 1)
        },
        has (element) {
          return this.elements.includes(element)
        },
        
      }
      
    
    let s = Set.from([1,2,3])