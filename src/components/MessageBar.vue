<template>
  <div :class="['message_wrapper', isMine ? 'mine' : 'other']">
    <div :class="['message_author', isMine ? 'mine' : 'other']">
      {{ message?.author }}
    </div>
    <div class="message_text">
      {{ message?.text }}
    </div>
  </div>
</template>

<script setup>
import { useCurrentUserStore } from '@/stores/user'

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
})

const currentUser = useCurrentUserStore()
const isMine = currentUser.user?.login === props.message?.author
</script>

<style scoped>
.message_wrapper {
  flex-direction: column;
  width: fit-content;
  padding: 5px 10px;
  border: var(--small-border);
  border-radius: var(--border-radius-s);
  background-color: #ffffff;
}
.message_wrapper.mine {
  align-self: flex-end;
  border-color: var(--second-color);
}
.message_wrapper.other {
  align-self: flex-start;
}

.message_author {
  text-align: start;
  font-size: 18px;
  font-weight: 700;
  color: var(--main-color);
}
.message_author.mine {
  color: var(--second-color);
}
.message_text {
  text-align: end;
  word-break: break-word;
}
</style>
<!-- Component of a message instance containing the message text and its sender.
 It looks different for your own messages and messages from others. -->
