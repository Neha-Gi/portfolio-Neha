
        //const values shouldn,t change
       
        const header = document.querySelector('h1')

         //let values can change
        let header1 = document.querySelector('h1')

        header.textContent = 'Javascript Basics'
        


        //Greet based on time
        const date = new Date()
        const hour = date.getHours()

        // check conditions

        if (hour >= 5 && hour <12)
        {greeting = "Good morning!"}

        else if (hour >=12 && hour <18)
        {greeting = "Good Afternoon!"}

        else if (hour>=18 && hour <20)
        {greeting = "Good evening!"}

        const para = document.getElementById('greeting')

        para.textContent = greeting 