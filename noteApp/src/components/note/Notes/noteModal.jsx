import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  // ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { CiRead } from "react-icons/ci";
import PropTypes from "prop-types";
function NoteModal({ detail }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} isIconOnly>
        <CiRead />
      </Button>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          base: `border-[#292f46] ${detail.color} dark:bg-[#19172c] text-white`,
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {detail.title}
              </ModalHeader>
              <ModalBody>
                <p>{detail.note}</p>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="bordered" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

NoteModal.propTypes = {
  detail: PropTypes.object,
};

export default NoteModal;
