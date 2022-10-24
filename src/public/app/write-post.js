$('#write-btn').click(()=>{
    const userId = JSON.parse(window.localStorage.user).id;
    const title = $('#p-title').val()
    const body = $('#p-body').val()

    $.post('/api/posts', { userId, title, body }, (data) => {
        $('#content').load('/components/all_posts.html')
      })
})