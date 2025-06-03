
        const text = document.getElementById("text");

        class ToDo{
            static LoadDom(){
                if (localStorage.getItem('tasks'))
                document.addEventListener('DOMContentLoaded',()=>{const listTasks = JSON.parse(localStorage.getItem('tasks'));
            for (let i = 0; i < listTasks.length;i++) ToDo.createElement(listTasks[i]);
            })
        }
        static createElement(text){
            const root = document.getElementById('data');
            const p = document.createElement('p');
            p.textContent = text;
            root.appendChild(p);
        }
        static handlerTasks(){
            const button = document.getElementById('but');
            button.addEventListener('click',()=>{const task = document.getElementById('text1').value;
                ToDo.createElement(task);
                let listTasks = [];
                if (localStorage.getItem('tasks'))
                listTasks = JSON.parse(localStorage.getItem('tasks'));
                listTasks.push(task);
                localStorage.setItem('tasks',JSON.stringify(listTasks));
            })
        }
    }

    ToDo.handlerTasks();
    ToDo.LoadDom();


        


