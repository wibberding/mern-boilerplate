import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { parseISO, formatDistanceToNow } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';

import Box from 'react-bulma-companion/lib/Box';
import Media from 'react-bulma-companion/lib/Media';
import Content from 'react-bulma-companion/lib/Content';
import Level from 'react-bulma-companion/lib/Level';
import Icon from 'react-bulma-companion/lib/Icon';

// import { attemptDeleteItem } from '_store/thunks/items';
import ConfirmModal from '_components/organisms/ConfirmModal';

// export default function Item({ id, name, description, price, withoutInventory, canBeShipped, createdAt, updatedAt }) {
export default function Item({ id, name, description }) {
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);

  const openModal = () => setConfirm(true);
  const closeModal = () => setConfirm(false);

  // const deleteItem = () => dispatch(attemptDeleteItem(id));

  return (
    <Box className="todo" component="li">
      <Media>
        <Media.Left />
        <Media.Content>
          <Content>
            <p>
              <small>
                {name}
              </small>
            </p>
            <p>
              {description}
            </p>
          </Content>

          <Level mobile>
            <Level.Left />
            <Level.Right>
              <Icon className="space-right" onClick={null} onKeyPress={null}>
                <FontAwesomeIcon icon={faPencil} size="lg" />
              </Icon>
              <Icon onClick={openModal} onKeyPress={null}>
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
              </Icon>
            </Level.Right>
          </Level>
        </Media.Content>
      </Media>
      <ConfirmModal
        confirm={confirm}
        closeModal={closeModal}
        deleteItem={null}
        // deleteItem={deleteItem}
      />
    </Box>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  // price: PropTypes.string,
  // withoutInventory: PropTypes.bool,
  // canBeShipped: PropTypes.bool,
  // createdAt: PropTypes.string.isRequired,
  // updatedAt: PropTypes.string,
};
Item.defaultProps = {
  // updatedAt: null,
  description: '',
  // price: '',
  // withoutInventory: false,
  // canBeShipped: false,
};
