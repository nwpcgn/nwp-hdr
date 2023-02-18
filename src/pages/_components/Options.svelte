<script>
  import { onMount } from "svelte";
  import { _options, setTheme } from "./_app";
  let options = {
    op1: false,
    op2: false,
    op3: false,
    op4: false,
  };
  const labels = ["Options", "Dark Theme", "Option 2", "Option 3", "Option 4"];
  const inputClass = "form-check-input me-2";
  const labelClass = "form-check-label stretched-link";
  onMount(() => {
    options = $_options;
  });
  
</script>



<div class="container py-5">
  <ul class="list-group">
    <li class="list-group-item list-group-item-primary fs-5">{labels[0]}</li>
    <li class="list-group-item">
      <input
        class={inputClass}
        type="checkbox"
        id="check1"
        bind:checked={options.op1}
        on:change={(e) => {
            $_options.op1 = e.currentTarget.checked;
            setTheme($_options.op1);
        }}
      />
      <label class={labelClass} for="check1">{labels[1]}</label>
    </li>
    <li class="list-group-item">
      <input
        class={inputClass}
        type="checkbox"
        id="check2"
        bind:checked={options.op2}
        on:change={(e) => {
            $_options.op2 = e.currentTarget.checked;
        }}
      />
      <label class={labelClass} for="check2">{labels[2]}</label>
    </li>
    <li class="list-group-item">
      <input
        class={inputClass}
        type="checkbox"
        id="check3"
        bind:checked={options.op3}
        on:change={(e) => {
            $_options.op3 = e.currentTarget.checked;
        }}
      />
      <label class={labelClass} for="check3">{labels[3]}</label>
    </li>
    <li class="list-group-item">
        <input
          class={inputClass}
          type="checkbox"
          id="check4"
          bind:checked={options.op4}
          on:change={(e) => {
              $_options.op4 = e.currentTarget.checked;
          }}
        />
        <label class={labelClass} for="check4">{labels[4]}</label>
    </li>

  </ul>
</div>
