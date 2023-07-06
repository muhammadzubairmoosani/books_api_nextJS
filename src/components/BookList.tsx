import { ThunkDispatch } from "@reduxjs/toolkit";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialState } from "../store/slice";
import { getBooks } from "../store/thunk";
import { Book } from "../types";
import Image from "next/image";

export const BookList = (): ReactNode => {
  const dispatch: ThunkDispatch<typeof initialState, void, any> = useDispatch();
  const { loading, error, books } = useSelector(
    (state: { bookListState: Book }) => state.bookListState
  );

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const showMessage = (message: string) => (
    <div className="h-screen flex justify-center items-center">
      <p className="text-3xl font-bold">{message}</p>
    </div>
  );

  if (loading) return showMessage("Loading...");
  if (error) return showMessage(error);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {!books?.length
        ? showMessage("No Books found!")
        : books.map((book, index) => (
            <li key={index} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <Image
                  width={48}
                  height={48}
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={book.imageLink}
                  alt="book-img"
                />
                <img />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {book.author}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    <span className="font-bold text-gray-900">Title:</span>{" "}
                    {book.title}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-xs leading-6 text-gray-900">
                  <span className="font-bold">Language:</span> {book.language} /{" "}
                  <span className="font-bold">Pages:</span> {book.pages} /{" "}
                  <span className="font-bold">Reviews:</span> {book.reviews}{" "}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <span className="font-bold text-gray-900">Price:</span>{" "}
                  {book.price}
                </p>
              </div>
            </li>
          ))}
    </ul>
  );
};
