<script context="module">
    /** @type {import("./[id]").Load} */
    export const load = ({ params }) => {
        return {
            props: { id: params.id }
        }
    }
</script>

<script>
    export let id;
</script>

<div>{id}</div>