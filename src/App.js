import React, { useState } from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import EditPost from './components/EditPost';
import LikePost from './components/LikePost';

const App = () => {

  const [posts, setPosts] = useState([]);
  const [editedPost, setEditedPost] = useState(null);
  

  function addPost(postObj) {
    let postArr = [...posts];
    postArr.push(postObj);
    setPosts(postArr);
  };

  function deletePost(id) {
    let deleteArr = [...posts];
    deleteArr = deleteArr.filter(item => {
      if(id !== item.id) {
        return true;
      }
    });

    setPosts(deleteArr);
  };

  function getEditedPost(id) {
    let onePost = posts.find(item => item.id === id);
    setEditedPost(onePost);
  };

  function saveChanges(newObj) {
    let newPosts = [...posts];
    newPosts = newPosts.map(item => {
      if(item.id === newObj.id) {
        return newObj
      };
      return item; 
    }) 

    setPosts(newPosts);
    setEditedPost(null);
  }

  return (
    <div>
      <CreatePost addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} getEditedPost={getEditedPost} />
      {editedPost ? (
          <EditPost editedPost={editedPost} saveChanges={saveChanges} />
        ) : (
          <h5>Not editing post now!</h5>
        )}

      {/* <LikePost />     */}
    </div>
  )
}

export default App

// Общее описание задачи: 
// Реализовать проект в котором будет полный CRUD(create, read, update, delete) для постов, у каждого поста должны быть: id, body, author, image. 
// Пользователь должен иметь возможность создать пост, редактировать его и удалить, 
// также у каждого поста должна быть возможность поставить лайк, если пост нравится, 
// то можно нажать на сердечко(которое у каждого поста свое) и оно должно быть перекрашено в красный, если нажать еще раз, 
// то будет перекрашено в белый. Каждый пост должен быть выделен отдельной рамкой, 
// а также в одном ряду должо находиться не более 3-х постов, остальные должны быть перемещены на следующую строку

// Разделение на подзадачи:
// 1. Создать реакт проект, очистить его
// 2. Проанализировать какие компоненты понадобятся, создать эти компоненты и подключить их в нужном порядке
// 3. Реализовать логику добавления поста на страницу, должна быть форма в которой будет соответствующее количество инпутов и кнопка сохранить, 
// после сохранения пост должен отображаться на странице, также возле каждого поста должно быть 2 кнопки ИЗМЕНИТЬ и УДАЛИТЬ, а также сердечко, для того, 
// чтобы поставить лайк, при сохранении поста необходимо проверятть инпуты на заполненность, во избежание сохранения пустого объекта
// 4. Реализовать логику удаления поста, при нажатии на кнопку УДАЛИТЬ, должен удаляться соответствующий пост, после удаления, изменения должны быть видны на странице
// 5. Добавить возможность изменения поста, при нажатии на кнопку ИЗМЕНИТЬ, на странице должен отобразиться соответствующий компонент в котором уже будут актуальные данные поста, 
// после изменения данных в инпутах и нажатия на кнопку СОХРАНИТЬ, пост должен быть изменен, 
// после этого снова перерисовать все изменения на странице, а компонент для изменения постов должен снова исчезнуть со страницы
// 6. Реализовать компонент для добавления лайка, если нажимаешь на сердечко, то оно должно стать красным, при нажатии еще раз, должно окраситься в белый
// 7. По завершению проекта протестировать его, если все работает корректно, залить весь проект в гитхаб