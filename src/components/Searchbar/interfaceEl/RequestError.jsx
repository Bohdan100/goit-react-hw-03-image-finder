// библиотека react-toastify для окон с ошибками
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ожидает проп - message - заходит сообщение об ошибке error.message
export default function RequestError({ message }) {
  return (
    // role="alert" - для читалок, как aria-label
    <div role="alert">
      {/* фото кота при ошибке, импортировано из './error.jpg' */}
      {toast.error(
        'An error occurred while searching for your query. Try to refine your search keyword.'
      )}
      <p>{message}</p>
    </div>
  );
}
