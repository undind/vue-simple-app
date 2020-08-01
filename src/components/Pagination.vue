<template>
    <b-pagination
        v-if="totalItems > 4"
        :total="totalItems"
        :current.sync="current"
        :range-before="rangeBefore"
        :range-after="rangeAfter"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage"
        :icon-prev="prevIcon"
        :icon-next="nextIcon"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
    >
    </b-pagination>
</template>

<script>
export default {
    props: {
        totalItems: Number,
    },
    data() {
        return {
            current: 1,
            perPage: 5,
            rangeBefore: 2,
            rangeAfter: 2,
            order: 'is-centered',
            size: '',
            isSimple: false,
            isRounded: false,
            prevIcon: 'chevron-left',
            nextIcon: 'chevron-right',
        };
    },
};
</script>
