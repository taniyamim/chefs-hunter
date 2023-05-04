import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Blog = () => {

    // const [numPages, setNumPages] = React.useState(null);
    // const [pageNumber, setPageNumber] = React.useState(1);
    // const [pdfBlob, setPdfBlob] = React.useState(null);

    // const handleDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages);
    // };

    // const handleDownloadPdf = async () => {
    //     const input = document.getElementById('blog-page');
    //     const pdfBlob = await htmlToPdf(input.outerHTML);
    //     setPdfBlob(pdfBlob);
    // };

    // const htmlToPdf = async (html) => {
    //     const { toPdf } = await import('react-to-pdf');
    //     const pdfOptions = {
    //         orientation: 'portrait',
    //         unit: 'in',
    //         format: [8.5, 11],
    //         html2canvas: {
    //             scale: 2,
    //         },
    //     };
    //     const pdfBlob = await toPdf(html, pdfOptions);
    //     return pdfBlob;
    // };


    return (
        <div className='container'>
            <h1 className='text-center'>Questions and Answers!!</h1>

            <h2>Differences between uncontrolled and controlled components:</h2>
            <p>
                In a controlled component, the value of an input element is controlled by React state. This means that whenever the user types something in the input field, the state is updated and the component re-renders with the updated value. On the other hand, in an uncontrolled component, the value of the input element is handled by the DOM itself, rather than React state. This means that the component does not know what the current value of the input field is, and instead relies on the DOM to keep track of it.
            </p>

            <h2>How to validate React props using PropTypes:</h2>
            <p>
                PropTypes is a library that allows you to specify the types of props that your component should expect to receive. This can help catch errors early on, before they cause issues in your application. Here's an example of how to use PropTypes:
                <pre>
                    {`
      import PropTypes from 'prop-types';

      const MyComponent = (props) => {
        // ...
      };

      MyComponent.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        email: PropTypes.string.isRequired
      };
    `}
                </pre>
            </p>

            <h2>Difference between Node.js and Express.js:</h2>
            <p>
                Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides a platform for building scalable network applications using JavaScript on the server-side. Express.js is a web framework built on top of Node.js that provides a set of features for building web applications and APIs. While Node.js provides low-level APIs for networking, file system access, and other low-level functionality, Express.js provides a higher-level API for handling HTTP requests and responses, routing, middleware, and other common web application features.
            </p>

            <h2>What is a custom hook, and why will you create a custom hook?</h2>
            <p>
                A custom hook is a function that allows you to reuse stateful logic across multiple components in your application. It's a way to extract common logic into a separate function that can be shared across components. For example, if you find yourself writing the same code over and over again in multiple components, you might want to extract that code into a custom hook. This can make your code more modular and easier to maintain. You can create a custom hook whenever you need to share stateful logic between components, or when you want to abstract away complex functionality into a reusable function.
            </p>
        </div>
    );
};

export default Blog;