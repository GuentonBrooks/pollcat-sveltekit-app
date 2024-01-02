<script>
  import IconClose from "~icons/mdi/close";
  import IconCloseOctagon from "~icons/mdi/close-octagon";
  import IconInformation from "~icons/mdi/information";
  import IconAlert from "~icons/mdi/alert";
  import IconCheckDecagram from "~icons/mdi/check-decagram";
  import IconChatQuestion from "~icons/mdi/chat-question";

  import { alertTextState, alertTypeState } from "../../store/alert";

  let text = "";
  let type = "";

  alertTextState.subscribe((textState) => text = textState);
  alertTypeState.subscribe((typeState) => type = typeState);

  const dismissAlert = () => {
    alertTextState.set("");
    alertTypeState.set("");
  };
  
</script>

{#if type === "info" && text}
<aside class="alert variant-soft m-3">
  <IconInformation />
  
  <div class="alert-message">{text}</div>
  
  <div class="alert-actions">
    <button class="btn btn-sm btn-square btn-ghost" on:click={dismissAlert}>
      <IconClose />
    </button>
  </div>
</aside>

{:else if type === "success" && text}
<aside class="alert variant-soft-success m-3">
  <IconCheckDecagram />
  
  <div class="alert-message">{text}</div>
  
  <div class="alert-actions">
    <button class="btn btn-sm btn-square btn-ghost" on:click={dismissAlert}>
      <IconClose />
    </button>
  </div>
</aside>

{:else if type === "warning" && text}
<aside class="alert variant-soft-warning m-3">
  <IconAlert />
  
  <div class="alert-message">{text}</div>
  
  <div class="alert-actions">
    <button class="btn btn-sm btn-square btn-ghost" on:click={dismissAlert}>
      <IconClose />
    </button>
  </div>
</aside>

{:else if type === "error" && text}
<aside class="alert variant-soft-error m-3">
  <IconCloseOctagon />
  
  <div class="alert-message">{text}</div>
  
  <div class="alert-actions">
    <button class="btn btn-sm btn-square btn-ghost" on:click={dismissAlert}>
      <IconClose />
    </button>
  </div>
</aside>

{:else if text}
<aside class="alert variant-ghost m-3">
  <IconChatQuestion />
  
  <div class="alert-message">{text}</div>
  
  <div class="alert-actions">
    <button class="btn btn-sm btn-square btn-ghost" on:click={dismissAlert}>
      <IconClose />
    </button>
  </div>
</aside>

{/if}
