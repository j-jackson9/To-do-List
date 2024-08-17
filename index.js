const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkBox => {
        checkBox.addEventListener('change', function () {
            if (this.checked) {
                finishTask(this);
            } else {
                unFinishTask(this);
            }
        });
    });

    function finishTask(checkbox) {
        const textbox = checkbox.previousElementSibling; // Get the associated textbox
        textbox.classList.add('strikethrough'); 
        checkbox.style.backgroundColor = 'green'; // Change the checkbox color
        textbox.disabled = true; // Disable the textbox
        alert('Task Complete, Good Job!');
    }

    function unFinishTask(checkbox) {
        const textbox = checkbox.previousElementSibling; // Get the associated textbox
        textbox.classList.remove('strikethrough'); 
        checkbox.style.backgroundColor = 'gray'; // Change the checkbox color
        textbox.disabled = false; // Enable the textbox
    }
