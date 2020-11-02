var $ = require('jquery');

$('.submit').on('click', function() {
  const todo = $('.todo').val();
  const deadline = $('.deadline').val();

  if (deadline != ""){
      const element =  `
          <tr class="no-done">
              <td align="center">${deadline}</td>
              <td>${todo}</td>
              <td class="done-btn" align="center"><i class="fas fa-check fa-2x"></i></td>
              <td class="delete-btn" align="center"><i class="far fa-trash-alt fa-2x"></i></td>
          </tr>
      `;

      $('.no-done-table').append(element);

      $('.todo').val("");
      $('.deadline').val("");
  }
});

$(document).on('click', '.done-btn', function(){
  let todo_element = $(this).parent();
  let beforeClass, afterClass;

  if (todo_element.attr("class") == "done"){
      beforeClass = "done";
      afterClass = "no-done";
  }else{
      beforeClass = "no-done";
      afterClass = "done";
  }
  
  todo_element.removeClass(beforeClass);
  todo_element.addClass(afterClass);

  if (afterClass == "done"){
      $('.done-table').append(todo_element);
  }else{
      $('.no-done-table').append(todo_element); 
  }
});


$(document).on('click', '.delete-btn', function(){
  $(this).parent().remove()
});