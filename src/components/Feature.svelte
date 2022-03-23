<script>
    export let emoji;
    export let name;
    export let desc;
</script>

<div class="border shadow p-2">
    <div class="text-2xl font-bold p-1">{emoji} {name}</div>
    <div class="whitespace-pre-wrap p-2 text-justify">
        {desc}
    </div>
</div>