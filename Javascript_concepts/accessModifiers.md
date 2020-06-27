unless java or ,net in javascript we have to write the logics inside function to expose or make a variable private .

```javascript
    var employee = function(fname,lname)
    {
        var privateFullName;//private
        this.Fname = fname;//public
        this.Lname = lname;

        var printFullName = function(){//private method
            privateFullName = fname + lname;
            return privateFullName;
        }

        this.PrivilegedFullName = function(){//priveleged method has access to private functions
            return printFullName();
        }

        employee.prototype.PublicFullName = function(){//public function it can not directly access the private functions
            // return printFullName();
            return this.PrivilegedFullName();
        }

    }

    var newEmp = new employee("Ganapati"," Bhat");
    console.log(newEmp.PrivilegedFullName());
    console.log(newEmp.PublicFullName());
```