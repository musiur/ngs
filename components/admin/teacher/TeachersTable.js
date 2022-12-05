import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
  Modal,
  Input,
} from "@nextui-org/react";
import { styled } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ButtonG from "../../ButtonG";

const StyledBadge = styled("span", {
  display: "inline-block",
  textTransform: "uppercase",
  padding: "$2 $3",
  margin: "0 2px",
  fontSize: "10px",
  fontWeight: "$bold",
  borderRadius: "14px",
  letterSpacing: "0.6px",
  lineHeight: 1,
  boxShadow: "1px 2px 5px 0px rgb(0 0 0 / 5%)",
  alignItems: "center",
  alignSelf: "center",
  color: "$white",
  variants: {
    type: {
      active: {
        bg: "$successLight",
        color: "$successLightContrast",
      },
      paused: {
        bg: "$errorLight",
        color: "$errorLightContrast",
      },
      vacation: {
        bg: "$warningLight",
        color: "$warningLightContrast",
      },
    },
  },
  defaultVariants: {
    type: "active",
  },
});

const IconButton = styled("button", {
  dflex: "center",
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: "0",
  margin: "0",
  bg: "transparent",
  transition: "$default",
  "&:hover": {
    opacity: "0.8",
  },
  "&:active": {
    opacity: "0.6",
  },
});

const EyeIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const EditIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke={fill}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke={fill}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke={fill}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DeleteIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TeachersTable = () => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [teachersInSession, setTeachersInSession] = useState([]);
  const openHandlerEdit = (id) => {
    setVisibleEdit(true);
    console.log(id);
  };
  const closeHandlerEdit = () => {
    setVisibleEdit(false);
  };
  const submitHandlerEdit = () => {
    setVisibleEdit(false);
  };
  let users = [
    {
      id: 9,
      name: "Samin Anam",
      email: "samin@gmail.com",
      designation: "Part-time Teacher",
      password: "1234",
      subject: "Math",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 8,
      name: "Shamsur Rahman",
      email: "shams@gmail.com",
      designation: "Asistant Teacher",
      password: "1234",
      subject: "Physics",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 7,
      name: "Donald Samit",
      email: "samit@gmail.com",
      designation: "Asistant Teacher",
      password: "12334",
      subject: "English",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 1,
      name: "Shamsul Arefin",
      email: "arefin@gmail.com",
      designation: "Asistant Teacher",
      password: "1234",
      subject: "Math",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 2,
      name: "Asaduzzaman Kabir",
      email: "kabir@gmail.com",
      designation: "Asistant Teacher",
      password: "1234",
      subject: "Bengali",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 3,
      name: "Jannatul Ferdaus Nyma",
      email: "nyma@gmail.com",
      designation: "Asistant Teacher",
      password: "1234",
      subject: "English",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 4,
      name: "Ahmed Mostafa",
      email: "ahmed@gmail.com",
      designation: "Asistant Teacher",
      password: "1234",
      subject: "Math",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 5,
      name: "Abdur Rahim Akash",
      email: "akash@gmail.com",
      designation: "Asistant Teacher",
      password: "1234",
      subject: "Physics",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
    {
      id: 6,
      name: "Samuel Test",
      email: "test@gmail.com",
      designation: "Part-time Teacher",
      password: "1234",
      subject: "English",
      classes: [3, 4, 5],
      avatar: "/static/images/teacher.webp",
    },
  ];
  useEffect(() => {
    if (window) {
      const teachersFromSession = JSON.parse(
        sessionStorage.getItem("teachers")
      );
      setTeachersInSession(teachersFromSession);
      users = teachersFromSession;
    }
  }, []);
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "Designation", uid: "designation" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );
      case "designation":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.subject}
              </Text>
            </Row>
          </Col>
        );

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => openHandlerEdit(user.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <div>
      <Table
        ariaLabel="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={teachersInSession}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        {/* <Table.Pagination
          noMargin
          align="center"
          rowsPerPage={8}
          onPageChange={(page) => console.log({ page })}
        /> */}
      </Table>
      <Edit props={{ visibleEdit, closeHandlerEdit, submitHandlerEdit }} />
    </div>
  );
};

export default TeachersTable;

const Edit = ({ props }) => {
  const { visibleEdit, closeHandlerEdit, submitHandlerEdit } = props;
  return (
    <div>
      <Modal
        closeButton
        blur
        ariaLabelledby="modal-title"
        open={visibleEdit}
        onClose={closeHandlerEdit}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NGS
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
        </Modal.Body>
        <Modal.Footer>
          <div>
            <ButtonG text="Close" color="error" func={closeHandlerEdit} />
          </div>
          <ButtonG text="Sign in" color="primary" func={submitHandlerEdit} />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
